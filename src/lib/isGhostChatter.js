const ghostChatters = [
  "alfredjudokus100289",
  "anotherttvviewer",
  "commanderroot",
  "communityshowcase",
  "itsvodoo"
  "jaidbot",
  "jaidschrott",
  "lurxx",
  "nightbot",
  "s1faka",
  "streamelements",
  "streamlabs",
  "v_and_k",
  "virgoproz",
  "winsock",
  "zanekyber",
]

export default chatter => {
  return ghostChatters.includes(chatter.login)
}