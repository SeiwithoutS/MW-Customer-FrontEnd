import { useState } from 'react';
import { branches } from './branches';
import type { Branch } from './branches';
export default function BranchPicker({ onChoose }: { onChoose: (branch: Branch) => void }) {
  const [area, setArea] = useState('');
  return <section className="shop-panel branch-picker">
    <h2>Chọn chi nhánh gần bạn</h2>
    <p>Chọn khu vực giao hàng rồi chọn chi nhánh thuận tiện. Thực đơn sẽ hiển thị theo chi nhánh bạn chọn.</p>
    <label className="form-label" htmlFor="branch-area">Khu vực giao hàng</label>
    <select className="form-input form-select" id="branch-area" value={area} onChange={e => setArea(e.target.value)}>
      <option value="">Tất cả khu vực</option>{branches.map(b => <option key={b.id}>{b.area}</option>)}
    </select>
    <div className="branch-list">{branches.filter(b => !area || b.area === area).map(b => <article className="branch-row" key={b.id}>
      <div><strong>{b.name}</strong><p>{b.area}</p></div>
      <button className="btn btn-primary btn-sm" onClick={() => onChoose(b)}>Chọn chi nhánh</button>
    </article>)}</div>
    <p className="hint">Khu vực và tình trạng món là dữ liệu demo, chưa phải tồn kho thực tế. Chọn theo khu vực; chưa hỗ trợ tính khoảng cách.</p>
  </section>;
}
