export class User {
    id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  role: 'admin' | 'teacher' | 'parent' | undefined;
}
