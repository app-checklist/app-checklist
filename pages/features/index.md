# Features Content

<ContentRenderer/>

import fs from 'fs'
import path from 'path'
import { useSSG } from 'nextra/ssg'

export const getStaticProps = ({ params }) => {
  const metaJsonPath = path.join(process.cwd(), 'pages/features/meta.json');
  const metaJsonFile = fs.readFileSync(metaJsonPath);
  const metaJson = JSON.parse(metaJsonFile);
  
  return {
    props: {
      ssg: { 
        toc: metaJson 
      }
    }
  }
}

export const ContentRenderer = () => {
  // And later we can get it inside MDX.
  const { toc } = useSSG();
  return <div class="horizontal-align">
    <br/>
    <div class="grid-container">
      {Object.entries(toc).slice(1).map((entry) => (
        <a key={entry[0]} href={entry[0]}>
          <div class="grid-item rounded-lg">
            <strong>{entry[1]}</strong>
          </div>
        </a>
      ))}
    </div>
  </div>
}
