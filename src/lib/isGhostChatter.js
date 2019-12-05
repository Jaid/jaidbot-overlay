const ghostChatters = [
  "anotherttvviewer",
  "commanderroot",
  "nightbot",
  "jaidbot",
  "jaidschrott",
  "streamlabs",
  "lurxx",
  "communityshowcase"
]

export default chatter => {
  return ghostChatters.includes(chatter.login)
}