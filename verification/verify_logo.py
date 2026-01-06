from playwright.sync_api import sync_playwright

def verify_logo():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate mobile
        context = browser.new_context(viewport={'width': 375, 'height': 812})
        page = context.new_page()

        try:
            # Check Header
            page.goto("http://localhost:3000")
            page.wait_for_selector("header")

            # Take screenshot of header on mobile
            page.screenshot(path="verification/mobile_header.png", clip={'x': 0, 'y': 0, 'width': 375, 'height': 150})

            # Check Footer
            # Scroll to bottom
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(1000) # wait for any lazy loading or transitions

            # Take screenshot of footer
            footer = page.query_selector("footer")
            if footer:
                footer.screenshot(path="verification/mobile_footer.png")
            else:
                print("Footer not found")

            # Desktop check
            context_desktop = browser.new_context(viewport={'width': 1280, 'height': 800})
            page_desktop = context_desktop.new_page()
            page_desktop.goto("http://localhost:3000")
            page_desktop.wait_for_selector("header")
            page_desktop.screenshot(path="verification/desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1280, 'height': 150})

            page_desktop.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page_desktop.wait_for_timeout(1000)
            footer_desktop = page_desktop.query_selector("footer")
            if footer_desktop:
                footer_desktop.screenshot(path="verification/desktop_footer.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_logo()
