import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    console.log("file你好好好好好")
    // 从 URL 中获取文件名
    const url = new URL(request.url);
    const filename = url.searchParams.get('filename');
    
    if (!filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }
    
    const logDir = path.join(process.cwd(), 'log');
    const filePath = path.join(logDir, filename);
    
    // 读取文件内容
    const content = await fs.readFile(filePath, 'utf-8');
    const logData = JSON.parse(content);
    
    return NextResponse.json(logData);
  } catch (error) {
    console.error('Error reading log file:', error);
    return NextResponse.json({ error: 'Failed to read log file' }, { status: 500 });
  }
} 