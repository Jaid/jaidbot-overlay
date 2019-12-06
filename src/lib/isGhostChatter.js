const ghostChatters = [
  "alfredjudokus100289",
  "anotherttvviewer",
  "commanderroot",
  "communityshowcase",
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
  "winsock",
  "wizebot",
  "zanekyber",
]

export default chatter => {
  return ghostChatters.includes(chatter.login)
}