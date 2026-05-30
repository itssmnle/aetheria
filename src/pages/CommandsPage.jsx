import React, { useState } from 'react';
import Header from '../components/Header';

// Mod icon references pulled from modsData
const MOD_ICONS = {
  pbwarps:    'https://cdn.modrinth.com/data/DZ2XMKfr/c9786bef5268f8f50f82ee906f2fe5109a004404.png',
  essentials: 'https://cdn.modrinth.com/data/o69N0FT2/f997c2d79dbbe38353137d461b2e0ea28ef07ca6_96.webp',
  openpac:    'https://cdn.modrinth.com/data/gF3BGWvG/410c5443b268912b11709e7d03dd9ec3fda38ea5.png',
  graves:     'https://cdn.modrinth.com/data/yn9u3ypm/a933032aa191fdc43cd439074f5713f8351e7af9.png',
  xaero:      'https://cdn.modrinth.com/data/1bokaNcj/icon.png',
};

const sections = [
  {
    id: 'teleportation',
    label: 'Teleportation',
    modName: 'Fabric Essentials',
    modIcon: MOD_ICONS.essentials,
    emoji: '🧭',
    commands: [
      {
        syntax: '/warp <name>',
        description: 'Teleport to a public warp point.',
        example: '/warp spawn',
      },
      {
        syntax: '/tpa <player>',
        aliases: ['/tpask <player>'],
        description: 'Send a teleport request to another player. They must accept before you are teleported.',
      },
      {
        syntax: '/tpahere <player>',
        description: 'Request that another player teleports to you.',
      },
      {
        syntax: '/sethome [name]',
        description: 'Save your current location as a named home point.',
        example: '/sethome base',
      },
      {
        syntax: '/home [name]',
        description: 'Teleport to one of your saved home points.',
        example: '/home base',
      },
    ],
  },
  {
    id: 'warps',
    label: 'Warps',
    modName: 'PBWarps',
    modIcon: MOD_ICONS.pbwarps,
    emoji: '🗺️',
    commands: [
      {
        syntax: '/warp',
        description: 'Open the list of all available public warps on the server.',
      },
    ],
  },
  {
    id: 'claims',
    label: 'Claims & Parties',
    modName: 'Open Parties and Claims',
    modIcon: MOD_ICONS.openpac,
    emoji: '🏴',
    tip: 'Easier to manage with Xaero\'s Minimap installed — claimed chunks are highlighted on the map.',
    commands: [
      {
        syntax: '/openpac-claims claim',
        description: 'Claim the chunk you are currently standing in. Claimed chunks are protected from outsiders.',
      },
      {
        syntax: '/openpac-parties member invite <player>',
        description: 'Invite a player to your party. Party members can interact with your claimed chunks.',
      },
    ],
  },
  {
    id: 'graves',
    label: 'Graves',
    modName: 'Graves',
    modIcon: MOD_ICONS.graves,
    emoji: '⚰️',
    commands: [
      {
        syntax: '/graves',
        description: 'View all of your active graves. Click a grave entry to highlight it on the map, then destroy the grave block in-world to retrieve your items. Note: graves inside claimed land may require the claim owner\'s help.',
      },
    ],
  },
  {
    id: 'fun',
    label: 'Fun Commands',
    modName: 'Fabric Essentials',
    modIcon: MOD_ICONS.essentials,
    emoji: '🎭',
    commands: [
      {
        syntax: '/hat',
        description: 'Place the item currently in your hand into your helmet armour slot — wear anything as a hat.',
      },
    ],
  },
];

const CommandsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <Header showSearch={false} />
      <div className="commands-page">
        {/* Page Header */}
        <div className="commands-header">
          <h1 className="commands-title">Server Commands</h1>
          <p className="commands-subtitle">A guide to playing on AetheriaSMP</p>
        </div>

        {/* Section Pills */}
        <div className="commands-pills">
          <button
            className={`cmd-pill ${activeSection === null ? 'active' : ''}`}
            onClick={() => setActiveSection(null)}
          >
            All
          </button>
          {sections.map(s => (
            <button
              key={s.id}
              className={`cmd-pill ${activeSection === s.id ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === s.id ? null : s.id)}
            >
              {s.emoji} {s.label}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="commands-sections">
          {sections
            .filter(s => activeSection === null || s.id === activeSection)
            .map(section => (
              <div key={section.id} className="cmd-section">
                {/* Section heading */}
                <div className="cmd-section-header">
                  <img
                    src={section.modIcon}
                    alt={section.modName}
                    className="cmd-mod-icon"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <h2 className="cmd-section-title">{section.emoji} {section.label}</h2>
                    <span className="cmd-mod-badge">{section.modName}</span>
                  </div>
                </div>

                {/* Optional tip */}
                {section.tip && (
                  <div className="cmd-tip">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {section.tip}
                  </div>
                )}

                {/* Commands list */}
                <div className="cmd-list">
                  {section.commands.map((cmd, i) => (
                    <div key={i} className="cmd-row">
                      <div className="cmd-syntax-wrap">
                        <code className="cmd-syntax">{cmd.syntax}</code>
                        {cmd.aliases?.map(alias => (
                          <code key={alias} className="cmd-alias">{alias}</code>
                        ))}
                      </div>
                      <p className="cmd-desc">{cmd.description}</p>
                      {cmd.example && (
                        <div className="cmd-example">
                          <span className="cmd-example-label">Example</span>
                          <code className="cmd-example-code">{cmd.example}</code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CommandsPage;
