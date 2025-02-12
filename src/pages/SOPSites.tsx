import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Layout/Header';
import { AnimatedBackground } from '../components/3D/Background';
import { PowerBIButton } from '../components/SOPSites/PowerBIButton';
import { ShareFolderButton } from '../components/SOPSites/ShareFolderButton';
import { ExternalLinkButton } from '../components/SOPSites/ExternalLinkButton';
import { powerBIReports, shareFolders, externalLinks } from '../data/navigationData';
import { Image } from 'lucide-react';

import image from "../images/images.png"
import image2 from "../images/image2.jpeg"

export const SOPSites = () => {
  const [activeSection, setActiveSection] = useState<'powerbi' | 'folders' | 'links' | 'team'>('powerbi');

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-4 gap-4 mb-8">
            {(['powerbi', 'folders', 'links', 'team'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                // Previous colors
                // ${activeSection === section
                //   ? 'bg-blue-600 text-white'
                //    : 'bg-white/80 text-gray-800 hover:bg-white/90'
                //  } 
                className={`p-3 rounded-lg font-medium transition-colors text-white
                  
                ${section === 'powerbi' ? 'bg-blue-600' :
                    section === 'folders' ? 'bg-green-600' : 
                    section === 'links' ? "bg-purple-600" : 
                    "bg-orange-600"
                  }
                `}
              >
                {section === 'powerbi' && 'Power BI Reports'}
                {section === 'folders' && 'Share Folders'}
                {section === 'links' && 'Links'}
                {section === 'team' && 'Team'}
              </button>
            ))}
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {activeSection === 'powerbi' && (
              powerBIReports.map((report) => (
                <PowerBIButton key={report.name} report={report} />
              ))
            )}

            {activeSection === 'folders' && (
              shareFolders.map((folder) => (
                <ShareFolderButton key={folder.name} folder={folder} />
              ))
            )}

            {activeSection === 'links' && (
              externalLinks.map((link) => (
                <ExternalLinkButton key={link.name} link={link} />
              ))
            )}

            {activeSection === 'team' && (
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <img src={image2} className="text-blue-600" />
                </div>
                <p className="text-gray-600">Team image would be displayed here</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};