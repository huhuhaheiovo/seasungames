import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';




// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
    const logDir = path.join(process.cwd(), 'log');
    const filePath = path.join(logDir, "sss");

    // 读取文件内容
    const content = await fs.readFile(filePath, 'utf-8');
    const logData = JSON.parse(content);

    return NextResponse.json(logData);
  } catch (error) {
    console.error('Error reading log file:', error);
    return NextResponse.json({ error: 'Failed to read log file' }, { status: 500 });
  }
}