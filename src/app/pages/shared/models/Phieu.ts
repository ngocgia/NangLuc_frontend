export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface IPhieu {
  _id?: string;
  trangThai: string;
  loaiDV: string;
  thoiGianBD: Date;
  thoiGianKT: Date;
}
