import { useState } from 'react';
import { ImFolder, ImFolderOpen } from 'react-icons/im';

const folders_tree = {
  children: [
    {
      name: 'name_modules',
      children: [
        { name: '.bin' },
        { name: '.cashe' },
        { name: '@adobe' },
        { name: '@ampproject' },
      ],
    },
    {
      name: 'public',
      children: [
        {
          name: 'index.html',
        },
      ],
    },
    {
      name: 'src',
      children: [
        {
          name: 'components',
          children: [{ name: 'Header.tsx' }, { name: 'Navbar.tsx' }],
        },
        {
          name: 'App.tsx',
        },
        {
          name: 'index.css',
        },
        {
          name: 'index.tsx',
        },
        {
          name: 'react-app-env.d.ts',
        },
      ],
    },
    { name: '.gitignore' },
    { name: 'package-lock.json' },
    { name: 'package.json' },
    { name: 'README.md' },
    { name: 'tsconfig.json' },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="row">
      <div
        className="item"
        onClick={() => {
          setIsExpanded(!isExpanded);
          console.log(depth);
        }}
      >
        {entry.children && (
          <i className="folder_icon">
            {isExpanded ? <ImFolderOpen /> : <ImFolder />}
          </i>
        )}

        {entry.name}
      </div>
      {isExpanded && (
        <div style={{ paddingLeft: '10px' }}>
          {entry.children?.map((entry, id) => (
            <Entry key={id} entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  return (
    <aside>
      <p>EXPLORER</p>
      <h3 className="title">react-challenge-2</h3>
      {folders_tree.children.map((entry, id) => (
        <Entry key={id} entry={entry} depth={1} />
      ))}
    </aside>
  );
}

export default Sidebar;
