interface ICustomConfig<U> extends Omit<RequestInit, 'body'> {
  body?: U;
}

export default async function fetcher<T, U>(
  endpoint: string | URL | Request,
  { body, ...customConfig }: ICustomConfig<U> = {},
): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getCookie('token');
  const controller = new AbortController();
  const signal = controller.signal;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config: RequestInit | undefined = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    signal
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let response;
  try {
    response = await fetch((process.env.NEXT_PUBLIC_HOST as string) + endpoint, config);
    if (response?.ok) {
      return (await response.json()) as T;
    }
    throw new Error('Server returned ' + response.status);
  } catch (error) {
    throw new Error('Failure ' + error);
  }
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires: string = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(cname: string) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
