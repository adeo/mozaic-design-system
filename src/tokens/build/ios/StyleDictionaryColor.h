
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Thu, 24 Jan 2019 15:41:57 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorPrimary01100,
ColorPrimary01200,
ColorPrimary01300,
ColorPrimary01400,
ColorPrimary01500,
ColorPrimary01600,
ColorPrimary01700,
ColorPrimary01800,
ColorPrimary01900,
ColorPrimary02100,
ColorPrimary02200,
ColorPrimary02300,
ColorPrimary02400,
ColorPrimary02500,
ColorPrimary02600,
ColorPrimary02700,
ColorPrimary02800,
ColorPrimary02900,
ColorGrey100,
ColorGrey200,
ColorGrey300,
ColorGrey400,
ColorGrey500,
ColorGrey600,
ColorGrey700,
ColorGrey800,
ColorGrey900,
ColorGrey999,
ColorGrey000,
ColorSecondaryBlue100,
ColorSecondaryBlue200,
ColorSecondaryBlue300,
ColorSecondaryBlue400,
ColorSecondaryBlue500,
ColorSecondaryBlue600,
ColorSecondaryBlue700,
ColorSecondaryBlue800,
ColorSecondaryBlue900,
ColorSecondaryPurple100,
ColorSecondaryPurple200,
ColorSecondaryPurple300,
ColorSecondaryPurple400,
ColorSecondaryPurple500,
ColorSecondaryPurple600,
ColorSecondaryPurple700,
ColorSecondaryPurple800,
ColorSecondaryPurple900,
ColorSecondaryRed100,
ColorSecondaryRed200,
ColorSecondaryRed300,
ColorSecondaryRed400,
ColorSecondaryRed500,
ColorSecondaryRed600,
ColorSecondaryRed700,
ColorSecondaryRed800,
ColorSecondaryRed900,
ColorSecondaryOrange100,
ColorSecondaryOrange200,
ColorSecondaryOrange300,
ColorSecondaryOrange400,
ColorSecondaryOrange500,
ColorSecondaryOrange600,
ColorSecondaryOrange700,
ColorSecondaryOrange800,
ColorSecondaryOrange900,
ColorSecondaryYellow100,
ColorSecondaryYellow200,
ColorSecondaryYellow300,
ColorSecondaryYellow400,
ColorSecondaryYellow500,
ColorSecondaryYellow600,
ColorSecondaryYellow700,
ColorSecondaryYellow800,
ColorSecondaryYellow900,
ColorFontPrimary01,
ColorFontPrimary02,
ColorFontDarkest,
ColorFontDark,
ColorFontMedium,
ColorFontLight,
ColorFontInverted
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end