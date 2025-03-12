import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    // 读取log文件夹中的所有文件
    const logDir = path.join(process.cwd(), 'log');
    const files = await fs.readdir(logDir);
    
    // 只返回JSON文件
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    return NextResponse.json(jsonFiles);
  } catch (error) {
    console.error('Error reading log directory:', error);
    return NextResponse.json({ error: 'Failed to read log files' }, { status: 500 });
  }
} 