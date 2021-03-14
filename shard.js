const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'ODIwNTczODc3OTE4NjI5ODg5.YE3I-g.hjcGGk1mx0U2EdkJEJ8-x8yyXMk'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();