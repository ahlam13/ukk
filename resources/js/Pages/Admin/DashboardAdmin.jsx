import SidebarAdmin from "@/Components/SidebarAdmin";
import { Link } from "@inertiajs/react";
import { FiLogOut, FiBook, FiUsers } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import RentLog from "@/Components/RentLog";

const DashboardAdmin = ({ auth, totalCategory, totalUser, totalBook }) => {
    return (
        <div className="flex">
            <SidebarAdmin />
            <div className="p-7">
                <div className="w-[1300px] flex justify-between">
                    <p className="text-2xl font-semibold pt-5">
                        Selamat Datang,
                    </p>
                    <Link method="POST" href={route("logout")}>
                        <FiLogOut className="w-12 h-12 pt-5 text-red-700" />
                    </Link>
                </div>
                <div className="pt-16 flex justify-between">
                    <div className="w-[300px] h-[120px] rounded-xl bg-black flex items-center justify-around gap-10">
                        <FiBook className="text-white w-14 h-14" />
                        <div>
                            <p className="text-2xl text-white">Buku</p>
                            <p className="text-xl text-zinc-300 text-end">
                                {totalBook}
                            </p>
                        </div>
                    </div>
                    <div className="w-[300px] h-[120px] rounded-xl bg-black flex items-center justify-around gap-10">
                        <MdOutlineCategory className="text-white w-14 h-14" />
                        <div className="">
                            <p className="text-2xl text-white">Kategori</p>
                            <p className="text-xl text-zinc-300 text-end">
                                {totalCategory}
                            </p>
                        </div>
                    </div>
                    <div className="w-[300px] h-[120px] rounded-xl bg-black flex items-center justify-around gap-5">
                        <FiUsers className="text-white w-14 h-14" />
                        <div>
                            <p className="text-2xl text-white">Pengguna</p>
                            <p className="text-xl text-zinc-300 text-end">
                                {totalUser}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-2xl pt-14 font-black">Log Peminjaman</p>
                <div className="pt-10">
                    <RentLog />
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
