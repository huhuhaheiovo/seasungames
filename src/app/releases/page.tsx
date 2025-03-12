'use client';

import { useState, useEffect } from 'react';
import { FaArchive, FaCode, FaSearch, FaFilter, FaHome, FaExternalLinkAlt, FaCalendarAlt, FaTag } from 'react-icons/fa';
import Link from 'next/link';

interface LogContent {
  title: string;
  url: string;
  tag_name: string;
  elements: string[];
  count: number;
}

interface Release {
  version: string;
  date: string;
  author: string;
  commit: string;
  isLatest?: boolean;
  title?: string;
  category?: string;
  sections?: Array<{
    title: string;
    content: Array<{
      subtitle?: string;
      items: string[];
    }>;
  }>;
  changes?: {
    cn?: {
      items: Array<{
        text: string;
        issue?: string;
      }>;
    };
    us?: {
      items: Array<{
        text: string;
        issue?: string;
      }>;
    };
  };
  assets: Array<{
    name: string;
    size: string;
    date: string;
    icon: 'archive' | 'code';
    url: string;
  }>;
}

// 工具函数：解析日志内容并转换为sections格式
function parseLogToSections(logContent: LogContent) {
  const sections: Release['sections'] = [];
  let currentSection = '';
  let currentItems: string[] = [];

  logContent.elements.forEach((element) => {
    if (element.startsWith('#') && element.endsWith('#')) {
      // 如果有之前的section，先保存
      if (currentSection && currentItems.length > 0) {
        sections.push({
          title: currentSection,
          content: [{
            items: [...currentItems]
          }]
        });
      }
      // 开始新的section
      currentSection = element.replace(/#/g, '').trim();
      currentItems = [];
    } else {
      currentItems.push(element);
    }
  });

  // 保存最后一个section
  if (currentSection && currentItems.length > 0) {
    sections.push({
      title: currentSection,
      content: [{
        items: [...currentItems]
      }]
    });
  }

  return sections;
}

// 示例更新日志数据
const sampleReleases: Release[] = [
  {
    version: "Global Storm",
    date: "2025-02-23",
    author: "S.H.A.D.O.W.",
    commit: "v1.0.0",
    isLatest: true,
    title: "Mecha BREAK— Blitz, Brawl, Blaze!",
    category: "测试版本",
    sections: [
      {
        title: "基本信息",
        content: [{
          items: [
            "操作代号：「全球风暴」",
            "保密等级：公开",
            "行动人员：全体S.H.A.D.O.W.飞行员",
            "开始时间：2月23日 18:00（GMT+8）",
            "行动时间：全天开放",
            "行动语音：中文/日文/英文",
            "行动语言：简体中文/英文/日文/西班牙文/葡萄牙文/德文/法文/俄文/韩文/繁体中文/泰文",
            "结束时间：另行通知"
          ]
        }]
      },
      {
        title: "活动信息",
        content: [{
          items: [
            "[Steam愿望单]",
            "· 「全球风暴」测试期间，飞行员可通过游戏内活动页面跳转至《解限机》的Steam商店页面。将《解限机》添加至愿望单后，返回游戏即可领取「全球风暴」测试专属飞行员帽饰[烈焰纪念]。",
            "—— [烈焰纪念]为「全球风暴」测试Steam平台限时奖励，飞行员在测试期间领取[烈焰纪念]可在正式上线后继承至同服务器的Steam账号中。"
          ]
        }]
      }
    ],
    assets: [
      { name: "Steam Demo", size: "12.5 GB", date: "Feb 23, 2025", icon: "archive", url: "#" },
      { name: "Global Storm Patch Notes", size: "2.1 MB", date: "Feb 15, 2025", icon: "code", url: "#" }
    ]
  },
  {
    version: "Alpha Test",
    date: "2024-12-15",
    author: "S.H.A.D.O.W.",
    commit: "v0.9.0",
    isLatest: false,
    title: "Mecha BREAK Alpha Test",
    category: "内测版本",
    sections: [
      {
        title: "测试信息",
        content: [{
          items: [
            "内部测试版本",
            "仅限受邀玩家参与",
            "测试时间：2024年12月15日-2024年12月30日"
          ]
        }]
      }
    ],
    assets: [
      { name: "Alpha Client", size: "10.2 GB", date: "Dec 15, 2024", icon: "archive", url: "#" },
      { name: "Alpha Patch Notes", size: "1.5 MB", date: "Dec 10, 2024", icon: "code", url: "#" }
    ]
  }
];

export default function ReleasesPage() {
  const [releasesList, setReleasesList] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedRelease, setExpandedRelease] = useState<number | null>(0); // 默认展开第一个

  useEffect(() => {
    async function loadLogFiles() {
      try {
        // 读取log文件夹中的所有JSON文件
        const response = await fetch('/api/logs');
        const logFiles = await response.json();
        
        const loadedReleases: Release[] = [];
        
        for (const file of logFiles) {
          // 使用查询参数获取文件内容
          const logResponse = await fetch(`/api/logs/file?filename=${file}`);
          const logContent: LogContent = await logResponse.json();
          
          // 转换为Release格式
          const release: Release = {
            version: 'Global Storm',
            date: new Date().toLocaleDateString(),
            author: 'S.H.A.D.O.W.',
            commit: 'v1.0.0',
            isLatest: true,
            title: logContent.title,
            category: '测试版本',
            sections: parseLogToSections(logContent),
            assets: [
              { name: 'Steam Demo', size: '12.5 GB', date: 'Feb 23, 2025', icon: 'archive', url: '#' },
              { name: 'Global Storm Patch Notes', size: '2.1 MB', date: 'Feb 15, 2025', icon: 'code', url: '#' }
            ]
          };
          
          loadedReleases.push(release);
        }
        
        // 如果没有加载到日志文件，使用示例数据
        if (loadedReleases.length === 0) {
          setReleasesList(sampleReleases);
        } else {
          setReleasesList(loadedReleases);
        }
      } catch (error) {
        console.error('Error loading log files:', error);
        // 出错时使用示例数据
        setReleasesList(sampleReleases);
      } finally {
        setLoading(false);
      }
    }

    loadLogFiles();
  }, []);

  // 获取所有分类
  const categories = ['all', ...Array.from(new Set(releasesList.map(r => r.category || '未分类')))];

  // 过滤和搜索
  const filteredReleases = releasesList.filter(release => {
    const matchesSearch = searchTerm === '' || 
      release.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      release.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
      release.sections?.some(section => 
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.content.some(content => 
          content.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a18] to-[#1a1a2e] text-gray-300">
      {/* 顶部导航 */}
      <div className="bg-black/30 backdrop-blur-md border-b border-blue-900/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-white hover:text-blue-400 transition-colors mr-6">
                <FaHome className="mr-2" />
                <span>返回首页</span>
              </Link>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Mecha Break 更新日志导航
              </h1>
            </div>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
              {/* 搜索框 */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索更新内容..."
                  className="bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2 pl-10 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-500" />
              </div>
              
              {/* 分类过滤 */}
              <div className="relative">
                <select
                  className="bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2 pl-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category === 'all' ? '所有分类' : category}
                    </option>
                  ))}
                </select>
                <FaFilter className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredReleases.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">未找到相关更新日志</h3>
            <p className="text-gray-500">尝试使用不同的搜索词或选择其他分类</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 时间线导航 */}
            <div className="mb-8 overflow-x-auto pb-4">
              <div className="flex space-x-4 min-w-max">
                {filteredReleases.map((release, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all ${
                      expandedRelease === index 
                        ? 'bg-blue-900/30 border border-blue-500/50 shadow-lg shadow-blue-900/20' 
                        : 'bg-gray-900/30 border border-gray-700/30 hover:bg-gray-800/30'
                    }`}
                    onClick={() => setExpandedRelease(index)}
                  >
                    <div className="flex items-center mb-1">
                      <FaCalendarAlt className="mr-2 text-blue-400" />
                      <span className="text-sm">{release.date}</span>
                    </div>
                    <span className={`font-medium ${expandedRelease === index ? 'text-blue-400' : 'text-gray-300'}`}>
                      {release.version}
                    </span>
                    {release.isLatest && (
                      <span className="mt-1 px-2 py-0.5 text-xs bg-green-900/50 text-green-300 rounded-full border border-green-700/50">
                        最新
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 展开的更新日志详情 */}
            {expandedRelease !== null && expandedRelease < filteredReleases.length && (
              <div className="border border-gray-700 rounded-lg overflow-hidden bg-gradient-to-b from-[#161b22] to-[#0d1117] shadow-xl">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center flex-wrap gap-2 mb-3">
                        <h2 className="text-3xl font-bold text-white tracking-tight">{filteredReleases[expandedRelease].version}</h2>
                        {filteredReleases[expandedRelease].isLatest && (
                          <span className="px-3 py-1 text-xs font-medium bg-green-900/50 text-green-300 rounded-full border border-green-700/50">最新</span>
                        )}
                        {filteredReleases[expandedRelease].category && (
                          <span className="px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-300 rounded-full border border-blue-700/50 flex items-center">
                            <FaTag className="mr-1" />
                            {filteredReleases[expandedRelease].category}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center flex-wrap text-sm text-gray-400 gap-4">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {filteredReleases[expandedRelease].date}
                        </span>
                        <span>{filteredReleases[expandedRelease].author}</span>
                        <span className="font-mono">{filteredReleases[expandedRelease].commit}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {filteredReleases[expandedRelease].assets.map((asset, i) => (
                        <a 
                          key={i}
                          href={asset.url}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 hover:bg-blue-800/30 transition-colors text-sm"
                        >
                          {asset.icon === 'archive' ? (
                            <FaArchive className="text-blue-400" />
                          ) : (
                            <FaCode className="text-blue-400" />
                          )}
                          <span>{asset.name}</span>
                          <FaExternalLinkAlt className="text-xs text-gray-500" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#161b22]/50">
                  {filteredReleases[expandedRelease].title && (
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {filteredReleases[expandedRelease].title}
                    </h3>
                  )}

                  {filteredReleases[expandedRelease].sections ? (
                    <div className="space-y-10">
                      {filteredReleases[expandedRelease].sections.map((section, sIndex) => (
                        <div key={sIndex} className="space-y-6">
                          <h4 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                            {section.title}
                          </h4>
                          {section.content.map((content, cIndex) => (
                            <div key={cIndex} className="space-y-4">
                              {content.subtitle && (
                                <h5 className="text-xl font-semibold text-purple-400 ml-4 flex items-center">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                  {content.subtitle}
                                </h5>
                              )}
                              <ul className="list-none pl-8 space-y-3">
                                {content.items.map((item, iIndex) => (
                                  <li key={iIndex} className="text-gray-300 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 mt-2.5"></span>
                                    <span className="flex-1">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">暂无详细更新内容</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 页脚 */}
      <footer className="bg-black/50 border-t border-blue-900/30 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mecha Break Log. 本站点为非官方更新日志导航站，仅供参考。
          </p>
        </div>
      </footer>
    </div>
  );
}
