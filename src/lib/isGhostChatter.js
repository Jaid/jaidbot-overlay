const ghostChatters = [
  "anotherttvviewer",
  "commanderroot",
  "nightbot",
  "jaidbot",
  "jaidchen",
  "jaidschrott",
  "streamlabs",
]

export default chatter => {
  return ghostChatters.includes(chatter.login)
}