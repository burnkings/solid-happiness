// 定义请求的基础URL
const baseURL = 'http://127.0.0.1:8000'; // 你的API服务器地址

// 封装发起POST请求的函数
export async function post(url, data) {
  try {
    const response = await fetch(baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('请求失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error('网络错误');
  }
}

// 封装登录请求
export async function login(username, password, captcha) {
  const url = '/login'; // 登录接口路径

  try {
    const response = await post(url, { username, password, captcha });
    return response; // 返回登录结果
  } catch (error) {
    throw new Error('登录失败');
  }
}