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
    const caryImagePath = path.resolve(__dirname, '../src/assets/cary2.png');
    const image = await loadImage(caryImagePath);
    
    // Calculate image dimensions to maintain aspect ratio
    const imageAspectRatio = image.width / image.height;
    let imageWidth = 700; // Adjust as needed
    let imageHeight = imageWidth / imageAspectRatio;
    
    // Draw the image
    context.drawImage(
      image,
      (width - imageWidth) / 2,
      30,
      imageWidth,
      imageHeight
    );
    
    // Add text
    context.fillStyle = '#e8b708'; // Gold color
    context.font = 'bold 60px "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.textAlign = 'center';
    context.fillText('ONE NIGHT WITH CARY', width / 2, height - 180);
    
    context.fillStyle = 'white';
    context.font = 'bold 60px "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.fillText('ONLY $7.99', width / 2, height - 100);
    
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