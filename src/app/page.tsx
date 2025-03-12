import Link from "next/link";
import { FaGamepad, FaDiscord, FaSteam, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { GiMechanicalArm } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a18] to-[#1a1a2e] text-white">
      {/* 顶部导航栏 */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-blue-900/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GiMechanicalArm className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Mecha Break Log</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="#media" className="text-gray-300 hover:text-white transition-colors">Media</Link>
              <Link href="/releases" className="text-gray-300 hover:text-white transition-colors">Updates</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <div className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="text-center md:text-left md:col-span-3">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-6">
                Mecha Break Log
              </h1>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"></div>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
                Mecha Break (Simplified Chinese: 解限机) is a mecha shooter game developed by Kingsoft&apos;s subsidiary Amazing Seasun Games.
              </p>
              
              <div className="mt-8 relative border-l-2 border-gradient-v pl-10 ml-12 max-w-2xl mx-auto md:mx-0 space-y-8 py-4 before:content-[''] before:absolute before:left-[-1px] before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-red-500">
                {/* 最新大事件：全球风暴测试结束 */}
                <div className="relative">
                  {/* 时间轴点 - 带有脉冲动画效果 */}
                  <div className="absolute left-[-47px] top-3 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 z-10"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-red-400 animate-ping opacity-75"></div>
                  </div>
                  
                  {/* 日期标签 - 更加突出 */}
                  <div className="absolute left-[-135px] top-2 flex items-center">
                    <span className="text-xs font-medium bg-red-500/20 text-red-300 py-1 px-2 rounded-full">Mar 16, 2025</span>
                  </div>
                  
                  <div className="px-5 py-4 bg-gradient-to-r from-red-600/20 to-purple-600/20 border border-red-500/30 rounded-lg shadow-lg shadow-red-900/5 hover:shadow-red-900/10 transition-all">
                    <div className="space-y-4">
                      <div>
                        <p className="text-base font-medium text-red-400">
                          <span className="mr-2">⚠️</span>
                          March 16th, 2025: Global Storm Test Ends at 23:59 | 2025年3月16日23时59分全球风暴测试正式结束
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-red-500/20">
                        <p className="text-base font-medium text-orange-400">
                          <span className="mr-2">🔔</span>
                          Important Notice: The server will be closed and all account data will be deleted | 重要通知：届时服务器将停止开放，所有账户数据将被删除
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 全球风暴测试开始 */}
                <div className="relative">
                  {/* 时间轴点 - 带有脉冲动画效果 */}
                  <div className="absolute left-[-47px] top-3 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                  </div>
                  
                  {/* 日期标签 - 更加突出 */}
                  <div className="absolute left-[-135px] top-2 flex items-center">
                    <span className="text-xs font-medium bg-blue-500/20 text-blue-300 py-1 px-2 rounded-full">Feb 23, 2025</span>
                  </div>
                  
                  <div className="px-5 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg shadow-lg shadow-blue-900/5 hover:shadow-blue-900/10 transition-all">
                    <div className="space-y-4">
                      <div>
                        <p className="text-base font-medium text-blue-400">
                          <span className="mr-2">🎮</span>
                          February 23rd, 2025: Global Storm Steam Demo Test Begins | 2025年2月23日全球风暴 Steam demo 测试开启
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-blue-500/20">
                        <p className="text-base font-medium text-orange-400">
                          <span className="mr-2">⚠️</span>
                          Global Storm Test: This test is an unrecorded exercise operation. All related data will be deleted after the operation ends | 全球风暴测试：本次测试作战为不记录列岸的演习行动，所有相關資料將在行動結束後消除
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 时间轴底部装饰 */}
                <div className="absolute left-[-5px] bottom-0 w-3 h-3 rounded-full border-2 border-blue-500/50 bg-transparent"></div>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/releases"
                  className="rounded-full border border-solid border-transparent bg-gradient-to-r from-blue-600 to-purple-600 transition-all flex items-center justify-center text-white gap-2 hover:shadow-lg hover:shadow-blue-500/20 text-sm sm:text-base h-12 px-6 w-full sm:w-auto max-w-xs"
                >
                  <IoRocketSharp className="text-lg" />
                  View Release Notes
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-solid border-blue-500/50 transition-all flex items-center justify-center text-white gap-2 hover:bg-blue-500/10 text-sm sm:text-base h-12 px-6 w-full sm:w-auto max-w-xs"
                >
                  <FaGamepad className="text-lg" />
                  Watch Gameplay
                </Link>
              </div>
              
              <div className="mt-8 flex justify-center md:justify-start space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaDiscord className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaSteam className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="relative md:col-span-2">
              <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg overflow-hidden border border-blue-500/30 shadow-xl shadow-blue-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-blue-500/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600/80 transition-colors">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="mt-4 text-sm text-blue-300">Watch Trailer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 特性部分 */}
      <div id="features" className="py-16 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Game Features</h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customizable Mechs",
                description: "Build and customize your own mech with various parts and weapons to suit your playstyle."
              },
              {
                title: "Dynamic Battles",
                description: "Experience intense battles with destructible environments and strategic gameplay."
              },
              {
                title: "Multiplayer Modes",
                description: "Compete in various multiplayer modes including team deathmatch and objective-based missions."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-400 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 媒体部分 */}
      <div id="media" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Media Gallery</h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-blue-400">Screenshot {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-black/50 border-t border-blue-900/30 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GiMechanicalArm className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold text-white">Mecha Break</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaDiscord className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaSteam className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
