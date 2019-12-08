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
  "naughtygirlnextdoor",
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
  "n0tahacker_",
]

export default chatter => {
  return ghostChatters.includes(chatter.login)
}