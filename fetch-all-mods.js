import fs from 'fs';

const modNames = [
  { id: 'fabric-api', name: 'Fabric API' },
  { id: 'cloth-config', name: 'Cloth Config API' },
  { id: 'fabric-installer', name: 'Fabric Installer' },
  { id: 'fabric-language-kotlin', name: 'Fabric Language Kotlin' },
  { id: 'forgeconfigapiport', name: 'Forge Config API Port' },
  { id: 'polymer-bundled', name: 'Polymer' },
  { id: 'silk-all', name: 'Silk' },
  { id: 'fabric-essentials', name: 'Fabric Essentials' },
  { id: 'clickvillagers', name: 'ClickVillagers' },
  { id: 'collective', name: 'Collective' },
  { id: 'easyauth', name: 'EasyAuth' },
  { id: 'invview', name: 'InvView' },
  { id: 'item-name-changer', name: 'Item Name Changer' },
  { id: 'brewery', name: 'Brewery' },
  { id: 'enchantments-encore', name: 'Enchantments Encore' },
  { id: 'graves', name: 'Graves' },
  { id: 'justmobheads', name: 'JustMobHeads' },
  { id: 'mineable-spawner', name: 'Mineable Spawner' },
  { id: 'no-creeper-grief', name: 'No Creeper Grief' },
  { id: 'open-parties-and-claims', name: 'Open Parties and Claims' },
  { id: 'pbwarps', name: 'PBWarps' },
  { id: 'styled-renaming', name: 'Styled Renaming' },
  { id: 'styled-chat', name: 'Styled Chat' },
  { id: 'styledplayerlist', name: 'Styled Player List' },
  { id: 'tree-vein-miner', name: 'Tree Vein Miner' },
  { id: 'veinminer-fabric', name: 'Veinminer' },
  { id: 'oh-my-vault', name: 'Oh My Vault' }
];

async function run() {
  const fileContent = fs.readFileSync('src/data/mods.js', 'utf-8');
  let newContent = fileContent;

  for (const mod of modNames) {
    try {
      const res = await fetch("https://api.modrinth.com/v2/search?query=" + encodeURIComponent(mod.name) + "&limit=1");
      const data = await res.json();
      if (data.hits && data.hits.length > 0) {
        const hit = data.hits[0];
        const iconUrl = hit.icon_url || '/icons/icon_tech.png';
        const projectUrl = "https://modrinth.com/" + hit.project_type + "/" + hit.slug;
        
        // Find the object in modsData.js and replace the icon and add url
        const regexIcon = new RegExp(`id:\\s*'${mod.id}',[\\s\\S]*?icon:\\s*'.*?'`);
        
        // Check if regex matches
        const match = fileContent.match(new RegExp(`id:\\s*'${mod.id}',[\\s\\S]*?icon:\\s*'.*?'`));
        if (match) {
           const replacement = match[0].replace(/icon:\s*'.*?'/, `icon: '${iconUrl}',\n    url: '${projectUrl}'`);
           newContent = newContent.replace(match[0], replacement);
        }
        console.log(`Updated ${mod.name}`);
      } else {
        console.log(`Not found: ${mod.name}`);
      }
    } catch (e) {
      console.log(`Error on ${mod.name}: ${e.message}`);
    }
  }

  fs.writeFileSync('src/data/mods.js', newContent);
  console.log("Done");
}

run();
