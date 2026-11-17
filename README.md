# FURIX 2.0 Discord Bot

A starter Discord bot built with Node.js and discord.js v14. Includes slash commands:
`/help`, `/ping`, `/server`, `/user`, `/clear`, `/kick`, `/ban`, `/timeout`.

## Requirements
- Node.js 20+
- A Discord account and a server where you can manage applications

## Setup
1. Create an application at https://discord.com/developers/applications
2. Open the application’s **Bot** page and create/reset its bot token.
3. Copy `.env.example` to a new file named `.env`.
4. Fill in `DISCORD_TOKEN`, `CLIENT_ID` (Application ID), and `GUILD_ID` (your test server ID).
5. In the Developer Portal, enable **Server Members Intent** and **Message Content Intent** if you plan to add features that need them. Keep your token private.
6. In the OAuth2 URL Generator, select scopes `bot` and `applications.commands`. Grant only the permissions the bot needs (Manage Messages, Kick Members, Ban Members, Moderate Members, View Channels, Send Messages, Embed Links, Read Message History). Use the generated URL to invite it.
7. In this project folder, run:

```bash
npm install
npm run deploy
npm start
```

Slash commands are registered to the test server in `GUILD_ID` and should appear quickly.

## Important
- Never share your bot token in chat or commit your `.env` file.
- Put the bot's role above the roles it needs to moderate, but below trusted staff roles.
- Test moderation commands in a private test server first.
- This is a starter build, not a complete clone of another bot. Welcome systems, tickets, giveaways, logging, anti-raid and a dashboard can be added next.
