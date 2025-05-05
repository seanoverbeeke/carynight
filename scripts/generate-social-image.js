import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, loadImage } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSocialImage() {
  const width = 1200;
  const height = 630;
  
  // Create canvas
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');
  
  // Set background
  context.fillStyle = '#141414'; // Netflix black
  context.fillRect(0, 0, width, height);
  
  try {
    // Load the Cary image
    const caryImagePath = path.resolve(__dirname, '../src/assets/cary.png');
    const image = await loadImage(caryImagePath);
    
    // Calculate image dimensions to maintain aspect ratio
    const imageAspectRatio = image.width / image.height;
    let imageWidth = 500; // Adjust as needed
    let imageHeight = imageWidth / imageAspectRatio;
    
    // Draw the image
    context.drawImage(
      image,
      (width - imageWidth) / 2,
      100,
      imageWidth,
      imageHeight
    );
    
    // Add text
    context.fillStyle = '#E50914'; // Netflix red
    context.font = 'bold 60px "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    context.fillText('One Night with Cary', width / 2, 80);
    
    context.fillStyle = 'white';
    context.font = 'bold 80px "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.fillText('$7.99', width / 2, height - 100);
    
    // Save the image
    const buffer = canvas.toBuffer('image/png');
    const outputPath = path.resolve(__dirname, '../public/social-share.png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Social image generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating social image:', error);
  }
}

generateSocialImage(); 