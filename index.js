// Approve
if(message.content.startsWith("/approve")){ // /approve @USER [Mistakes]
  message.delete();
  if(message.member.roles.cache.has("ID")){ // ID of staff role
    let mencionado = message.mentions.members.first();
    if (!mencionado) return message.reply("please, mention an user.")
    message.channel.send('***✅ <@' + message.mentions.members.first() + '>***, has passed the exam of whitelist with **' + args[1] + '** mistake/s.');

    let member = message.mentions.members.first();
    member.roles.add("ID"); // Role of whitelist

  } else {
    message.reply("you don't have staff perms to perform this command.");
  }
}

// Exam Fail
if(message.content.startsWith("/examfail")){ // /examfail @USER [Mistakes]
  message.delete();
  if(message.member.roles.cache.has("ID")){ // ID of staff role
    let mencionado = message.mentions.members.first();
    if (!mencionado) return message.reply("please, mention an user.")
    message.channel.send('***❌ <@' + message.mentions.members.first() + '>***, has failed the exman of whitelist with **' + args[1] + '** mistake/s.');

    let member = message.mentions.members.first();
    member.roles.add("ID"); // Role of fail of exam

  } else {
    message.reply("you don't have staff perms to perform this command.");
  }
}

// Final Fail Exam
if(message.content.startsWith("/finalfail")){ // /finalfail @USER [Mistakes]
  message.delete();
  if(message.member.roles.cache.has("ID")){ // ID of staff role
    let mencionado = message.mentions.members.first();
    if (!mencionado) return message.reply("please, mention an user.")
    message.channel.send('***❌ <@' + message.mentions.members.first() + '>***, has failed the final exam of the whitelist with **' + args[1] + '** mistake/s.');
      
    mencionado.roles.add("ID"); // Role of fail of final exam
    mencionado.roles.add("ID"); // Blacklist role
  } else {
    message.reply("you don't have staff perms to perform this command.");
  }
}

// Blacklist
if(message.content.startsWith("/blacklist")){ // /blacklist @USER [Reason]
  message.delete();
  if(message.member.roles.cache.has("ID")){ // ID of staff role
    let mencionado = message.mentions.members.first();
    if (!mencionado) return message.reply("please, mention an user.")
    if(!args[1]) return message.reply("there's no arguments. Example: /blacklist @USER Troll and PG.");

    mencionado.roles.add("ID"); // Role of blacklist

    const channel = client.channels.cache.find(channel => channel.id === "ID"); // ID of channel logs
    const blackListEmbed = {
      description: 'The user <@' + message.mentions.members.first() + '> has been blacklisted by <@' + message.author.id + '>. Reason: ' + args.slice(1).join(' '),
      color: 0xFF0000,
      title: '• BlackList',
      timestamp: new Date(),
      footer: '• BlackList',
    };
    channel.send({embed: blackListEmbed});
  } else {
    message.reply("you don't have staff perms to perform this command.");
  }
}
