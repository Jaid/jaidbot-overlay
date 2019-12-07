const ghostChatters = [
  "alfredjudokus100289",
  "anotherttvviewer",
  "artyrus2",
  "bloodlustr",
  "commanderroot",
  "communityshowcase",
  "dinu",
  "gzipped",
  "itsvodoo",
  "jaidbot",
  "jaidschrott",
  "logviewer",
  "lurxx",
  "moobot",
  "nightbot",
  "s1faka",
  "skumshop",
  "streamelements",
  "streamlabs",
  "v_and_k",
  "virgoproz",
  "vivbot",
  "wazza",
  "winsock",
  "wizebot",
  "zanekyber",
]

export default chatter => {
  return ghostChatters.includes(chatter.login)
}