// app/api/test-db/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// GET handler
export async function GET() {
  try {
    // Test creating a user
    const user = await prisma.user.create({
      data: {
        email: `test${Date.now()}@example.com`, // Unique email
        username: `testuser${Date.now()}`,
        name: 'Test User',
        password: 'hashedpassword123', // In real app, hash this!
        id: `testuser${Date.now()}`, // Ensure unique ID
      },
    });

    // Test creating a post
    const post = await prisma.post.create({
      data: {
        title: 'My First Travel Post',
        content: 'This is my first travel blog post!',
        published: true,
        authorId: user.id,
      },
    });

    // Test fetching data with relations
    const userWithPosts = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        posts: true,
      },
    });

    return NextResponse.json({
      message: 'Database test successful!',
      user: userWithPosts,
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Database test failed', details: error.message },
      { status: 500 }
    );
  }
}

// POST handler (optional - for testing POST requests)
export async function POST(request) {
  try {
    const body = await request.json();
    
    const user = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        name: body.name,
        password: body.password,
      },
    });

    return NextResponse.json({
      message: 'User created successfully!',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE handler (optional - for cleaning up test data)
export async function DELETE() {
  try {
    // Delete all posts first (due to foreign key constraint)
    await prisma.post.deleteMany();
    
    // Then delete all users
    await prisma.user.deleteMany();

    return NextResponse.json({
      message: 'All test data deleted successfully!',
    });
  } catch (error) {
    console.error('Error deleting data:', error);
    return NextResponse.json(
      { error: 'Failed to delete data', details: error.message },
      { status: 500 }
    );
  }
}