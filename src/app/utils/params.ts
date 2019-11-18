import { HttpParams } from '@angular/common/http';

export function getHttpParamsByObject<T>(obj: T): HttpParams {
  let httpParams = new HttpParams();
  Object.keys(obj).forEach((key) => {
    httpParams = httpParams.append(key, obj[key]);
  });

  return httpParams;
}
