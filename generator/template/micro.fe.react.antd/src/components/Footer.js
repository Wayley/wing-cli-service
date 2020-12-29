import { copyright } from '@root/package.json';
export default function Footer() {
  const now = new Date().getFullYear();
  return (
    <div className="global-footer">
      <div>
        Copyright © {copyright} 2019-{now}
      </div>
    </div>
  );
}
