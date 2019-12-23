import {parse} from "query-string"

const query = {}

for (const [key, value] of Object.entries(parse(document.location.search))) {
  query[key] = value
}

export default query