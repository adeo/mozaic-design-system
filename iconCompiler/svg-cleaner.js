#! /usr/bin/env node

const fs            = require('fs');
const path          = require('path');
const svgo          = require('svgo');
const glob          = require('glob');
const currentDir    = process.cwd();
const outputPath    = path.join(currentDir, 'static/icons/');
const inputPath     = path.join(currentDir, 'src/icons/**/*.svg');

let svgName;
let filePath;

glob( inputPath, (er, files) => {
    files.forEach( file => {
        fs.readFile( file, 'utf8', (err, data) => {
        
            if (err) { throw err; }

            filePath = file;
            svgName = path.basename(filePath);

            optimize(filePath, data);
        });
    });
});

let optimize = (filePath, data) => {
  let svgCleaned = customOptimization(data);
  SVGOoptimization( svgCleaned );
}

let saveFile = data => {
  fs.writeFileSync(path.join(outputPath, svgName), data, 'utf8');
}

let customOptimization = data => {
    // Remove breaklines
    data = data.replace(/ /g,' ');
    data = data.replace(/\t/g,'');
    data = data.replace(/\n/g,'');
    data = data.replace(/\r/g,'');

    // Remove doctype
    data = data.replace('<?xml version="1.0" encoding="UTF-8"?>','');

    // Remove useless spaces
    data = data.replace(/>\s+</g,'><');

    // Remove <g> group tags
    data = data.replace(/<g(.*?)>/g,'');
    data = data.replace(/<\/g>/g,'');

    // Remove html commentq
    data = data.replace(/<!--(.*)-->/g,'');

    // Remove <style> tag
    data = data.replace(/<style>(.*)<\/style>/g,'');

    // Remove generated content and definition
    data = data.replace(/<defs><\/defs>/g,'');

    data = data.replace(/<title>(.*)<\/title>/g,'');

    data = data.replace(/<desc>Created with Sketch.<\/desc>/g,'');


    // Remove class attr
    data = data.replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi,'');

    // Remove fill attr
    data = data.replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi,'');

    // Remove empty <rect>
    data = data.replace(/<rect(.*)width="\w+"(.*)height="\w+"\/>/g,'');
    data = data.replace(/<rect(.*)width="\w+"(.*)height="\w+"\/><\/rect>/g,'');

    // Add default fill
    data = data.replace('path', 'path fill="#222020"')
    return data;
}

let SVGOoptimization = (data) => {
    new svgo ({
        plugins: [{
          cleanupAttrs: true,
        }, {
          removeDoctype: true,
        },{
          removeXMLProcInst: true,
        },{
          removeComments: true,
        },{
          removeMetadata: true,
        },{
          removeTitle: true,
        },{
          removeDesc: true,
        },{
          removeUselessDefs: true,
        },{
          removeEditorsNSData: true,
        },{
          removeEmptyAttrs: true,
        },{
          removeHiddenElems: true,
        },{
          removeEmptyText: true,
        },{
          removeEmptyContainers: true,
        },{
          removeViewBox: false,
        },{
          cleanupEnableBackground: true,
        },{
          convertStyleToAttrs: true,
        },{
          convertColors: true,
        },{
          convertPathData: true,
        },{
          convertTransform: true,
        },{
          removeUnknownsAndDefaults: true,
        },{
          removeNonInheritableGroupAttrs: true,
        },{
          removeUselessStrokeAndFill: true,
        },{
          removeUnusedNS: true,
        },{
          cleanupIDs: true,
        },{
          cleanupNumericValues: true,
        },{
          moveElemsAttrsToGroup: true,
        },{
          moveGroupAttrsToElems: true,
        },{
          collapseGroups: true,
        },{
          removeRasterImages: false,
        },{
          mergePaths: true,
        },{
          convertShapeToPath: true,
        },{
          sortAttrs: true,
        },{
          removeDimensions: true,
        }]
    })

    // Run SVGO optimizations
    .optimize( data )

    .catch((err) => console.log(err))

    .then( result => {
      saveFile(result.data)
    })
}