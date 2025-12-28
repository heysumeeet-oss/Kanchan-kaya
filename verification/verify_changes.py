from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a mobile device (iPhone 12 Pro) to verify the premium mobile UI
        context = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1"
        )
        page = context.new_page()

        try:
            # Wait for server to start - retry loop
            page.goto("http://localhost:3000")

            # 1. Verify Hero Section H1
            page.wait_for_selector("h1", timeout=10000)
            h1_text = page.inner_text("h1")
            print(f"H1 Text: {h1_text}")
            assert "Best Naturopathy Treatment Center in Lucknow" in h1_text

            # Take screenshot of Hero Section
            page.screenshot(path="verification/hero_mobile.png")

            # 2. Verify Services (Scroll down)
            page.evaluate("window.scrollBy(0, 1000)")
            page.wait_for_selector("#services")
            page.screenshot(path="verification/services_mobile.png")

            # 3. Verify Contact Options
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_selector("#contact")
            page.screenshot(path="verification/contact_mobile.png")

            print("Verification successful!")

        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
