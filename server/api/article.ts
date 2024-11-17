import path from 'node:path'
import fs from 'node:fs'
import process from 'node:process'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  try {
    const filePath = path.resolve(process.cwd(), 'content', `${body.name}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return {
      mdContent: JSON.parse(JSON.stringify(fileContent))
    }
  } catch (e) {
    return {
      mdContent: e
    }
  }
})
