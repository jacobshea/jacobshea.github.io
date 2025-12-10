// Test page functionality - displays warning banner and download button

window.addEventListener('DOMContentLoaded', () => {
  const banner = document.createElement('div');
  banner.style.cssText = `
    background: #fef3c7;
    border: 2px solid #f59e0b;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
    font-weight: 500;
  `;
  banner.innerHTML = `
    <strong>⚠️ Extension Limitation:</strong> PHI detection won't work on this chrome-extension:// page
    because content scripts can't run on extension URLs.<br><br>
    <strong>To test the extension, choose one of these options:</strong>
    <ol style="margin: 8px 0 4px 0;">
      <li><strong>Download test page</strong> - <button id="downloadBtn" style="padding: 4px 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 8px;">Download Test Page</button> then open the downloaded HTML file</li>
      <li><strong>Test on any regular website</strong> - Try selecting text on GitHub, Google Docs, news sites, etc.</li>
      <li><strong>Quick test</strong> - Paste PHI samples into any text field on a regular webpage</li>
    </ol>
    <em style="color: #92400e; display: block; margin-top: 8px;">
      This is a Chrome security feature - extensions can't modify their own pages to prevent malicious behavior.
    </em>
  `;
  document.body.insertBefore(banner, document.body.firstChild);

  // Add download functionality
  document.getElementById('downloadBtn').addEventListener('click', () => {
    // Create a link to download the standalone test page
    const a = document.createElement('a');
    a.href = 'downloadable-test-page.html';
    a.download = 'phi-detector-test-page.html';
    a.click();
  });
});
