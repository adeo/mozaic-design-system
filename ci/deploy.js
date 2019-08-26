const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function gcloud() {
  const { stdout } = await exec(
    'gcloud app operations list --pending --format=json --project=mozaic-design-system '
  )
  return JSON.parse(stdout)
}

async function wait(version) {
  let target = ''
  do {
    json = await gcloud()

    if (json.length > 0) {
      target = json[0].op_resource.metadata.target
    }
  } while (
    json.length > 0 &&
    target === `apps/mozaic-design-system/services/demo/versions/${version}`
  )
}

wait(process.argv[2])
