import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';
import LanguagesTab from '../Components/SkillTabs/LanguagesTab';
import FrameworksTab from '../Components/SkillTabs/FrameworksTab';
import BlockchainToolsTab from '../Components/SkillTabs/BlockchainToolsTab';
import GeneralToolsTab from '../Components/SkillTabs/GeneralToolsTab';
import CssToolsTab from '../Components/SkillTabs/CssToolsTab';
import TestingTab from '../Components/SkillTabs/TestingTab';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  const tabs = [
    'Languages',
    'Frameworks',
    'Blockchain',
    'CSS',
    'Testing',
    'Other Tools',
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const handleChange = e => {
    setActiveTab(e.target.value);
  };

  const renderSwitch = param => {
    switch (param) {
      case 'Languages':
        return <LanguagesTab />;
      case 'Frameworks':
        return <FrameworksTab />;
      case 'Blockchain':
        return <BlockchainToolsTab />;
      case 'CSS':
        return <CssToolsTab />;
      case 'Testing':
        return <TestingTab />;
      case 'Other Tools':
        return <GeneralToolsTab />;
      default:
        return;
    }
  };

  return (
    <div className="min-h-screen w-full lg:pl-32 bg-zinc-100 dark:bg-zinc-800">
      <div className="container flex flex-col justify-center items-start w-5/6 mx-auto py-20 space-y-3">
        <PageTitle title={'My Skills'} bg={'Skills'} />

        {/* tabs */}
        <div id="tabs" className="pb-5 border-b border-zinc-200 md:pb-0">
          <div className="mt-3 sm:mt-4">
            <div className="md:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 dark:focus:ring-yellow-400 focus:border-rose-500 dark:focus:border-yellow-400 md:text-sm rounded-md"
                defaultValue={activeTab}
                onChange={handleChange}
              >
                {tabs.map(tab => (
                  <option key={tab}>{tab}</option>
                ))}
              </select>
            </div>
            <div className="hidden md:block">
              <nav className="-mb-px flex space-x-8">
                {tabs.map(tab => (
                  <Link
                    key={tab}
                    // href={tab.href}
                    className={classNames(
                      tab === activeTab
                        ? 'border-rose-500 dark:border-yellow-300 text-rose-600 dark:text-yellow-400'
                        : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:border-zinc-300',
                      'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                    )}
                    // aria-current={tab.name === activeTab ? 'page' : undefined}
                    to={{ hash: '#tabs' }}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full">{renderSwitch(activeTab)}</div>
      </div>
    </div>
  );
};

export default Skills;
