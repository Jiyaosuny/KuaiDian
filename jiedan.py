from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def check_element_presence(driver, by, value):
    try:
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((by, value))
        )
        return element
    except Exception:
        return None

def main():
    # 设置Chrome驱动路径，请根据你的实际情况修改
    driver_path = '/path/to/chromedriver'

    # 创建Chrome浏览器实例
    driver = webdriver.Chrome(executable_path=driver_path)

    try:
        # 打开网页
        driver.get("https://kdzb.cc/")

        # 判断元素A是否存在
        element_a = check_element_presence(driver, By.CLASS_NAME, "start-order")
        if element_a:
            element_a.click()
            print("点击了元素A")

        # 判断元素B是否存在
        element_b = check_element_presence(driver, By.ID, "elementB")
        if element_b:
            driver.back()
            print("返回了")

        # 判断元素C是否存在
        element_c = check_element_presence(driver, By.ID, "elementC")
        if element_c:
            print("停止")

        # 监测元素C的消失
        while check_element_presence(driver, By.ID, "elementC"):
            pass

    finally:
        # 关闭浏览器
        driver.quit()

if __name__ == "__main__":
    main()
