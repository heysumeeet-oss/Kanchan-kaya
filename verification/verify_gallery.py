from playwright.sync_api import sync_playwright

def verify_gallery():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle")

            # Scroll to Gallery Section
            # Use a more specific locator to avoid strict mode violation
            gallery_section = page.locator("section.bg-green-50").filter(has_text="Our Center").first
            gallery_section.scroll_into_view_if_needed()

            # Take screenshot of the section
            gallery_section.screenshot(path="verification/gallery_section.png")
            print("Screenshot taken")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_gallery()
