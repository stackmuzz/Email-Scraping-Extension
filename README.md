# Email-Scraping-Extension
Pattern matching script to identify all the emails on a webpage.
# Email Scraping Extension

This project is a Chrome extension that scrapes email addresses from web pages and displays them in a popup. The extension allows users to collect email addresses and view them without navigating away from the current page.

## Features

- Scrapes email addresses from the current web page.
- Displays scraped email addresses in a popup.
- Handles variations in email formats (e.g., `@`, `[AT]`, `[at]`, `.`, `[dot]`, `[DOT]`).
- Persists email addresses across page navigations until cleared by the user.
- Provides buttons to check for new emails and clear the email list.

## Prerequisites

- Google Chrome browser

## Setup

### Step 1: Clone or Download the Repository

Clone the repository or download the files to your local machine.

### Step 2: Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable `Developer mode` by clicking the toggle switch in the top right corner.
3. Click the `Load unpacked` button and select the folder containing the extension files.

### Step 3: Configure the Extension

1. Open the `manifest.json` file and ensure the permissions and settings are correct for your use case.

## Usage

1. **Activate the Extension:**
   - Click on the extension icon in the Chrome toolbar to open the popup.

2. **Scrape Emails:**
   - Click the `Check Emails` button to scrape email addresses from the current web page.
   - The scraped email addresses will be displayed in the popup.

3. **Clear Emails:**
   - Click the `Clear Emails List` button to clear the list of scraped email addresses.

## Customization

- **Email Scraping Pattern:**
   - Customize the email scraping pattern in the content script to handle additional variations in email formats.

- **Popup Design:**
   - Modify the HTML and CSS files in the `popup` folder to change the appearance of the popup.

## Troubleshooting

- Ensure the extension is properly loaded and enabled in Chrome.
- Verify that the content script is correctly injecting into the web pages.
- Check the Chrome developer console for any error messages and debug accordingly.


