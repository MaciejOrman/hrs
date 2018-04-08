import { environment } from 'environments/environment';

export function getBaseHref() {
    return environment.production ? '/hrs/' : '/';
}
