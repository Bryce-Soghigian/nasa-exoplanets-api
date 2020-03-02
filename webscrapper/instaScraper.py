import time
import re
import urllib
from selenium.webdriver import Chrome
 
def insta_url_to_img(url, filename="insta.jpg"):
    """
    Getting the actual photo file from an Instagram url
    Args:
    url: Instagram direct post url
    filename: file name for image at url
    Returns:
    image file, saved locally
    """
    browser = Chrome('chromedriver')
    browser.get(url)
    try: 
        by_tag = browser.find_element_by_tag_name('src').get_attribute('src').split(' ')[0]
        # image = browser.find_element_by_xpath(
        #     """/html/body/span/section/main/div/div/article/
        #         div[1]/div/div/div[1]/div[1]/img""").get_attribute('src').split(' ')[0]
        urllib.request.urlretrieve(by_tag, filename)
    # If image is not a photo, print notice
    except:
        print("No image")

def recent_post_links(username, post_count=1):
    """
    With the input of an account page, scrape the 10 most recent posts urls
    Args:
    username: Instagram username
    post_count: default of 10, set as many or as few as you want
    Returns:
    A list with the unique url links for the most recent posts for the provided user
    """
    url = "https://www.instagram.com/" + username + "/"
    browser = Chrome('chromedriver')
    browser.get(url)
    post = 'https://www.instagram.com/p/'
    post_links = []
    while len(post_links) < post_count:
        links = [a.get_attribute('href')
                 for a in browser.find_elements_by_tag_name('a')]
        for link in links:
            if post in link and link not in post_links:
                post_links.append(link)
        scroll_down = "window.scrollTo(0, document.body.scrollHeight);"
        browser.execute_script(scroll_down)
        time.sleep(10)
    else:
        for posts in post_links:
            insta_url_to_img(posts,f"${posts}.jpg")

        print(post_links)
        browser.stop_client()
        return post_links[:post_count]



recent_post_links("nasa", 1)