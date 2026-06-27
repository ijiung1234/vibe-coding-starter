import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = {
    ...getProfile(),
    name: "이지웅",
    team: "부산대학교 통계학과",
    position: "학생회장",
    uniform_number: "3학년",
    tagline: "그저 그런 삶을 살아가고 있는 그저 그런 인간입니다.",
    introduction: "안녕하세요. 저는 부산대학교 통계학과에 재학 중인 이지웅입니다. 만나서 반갑고 열심히 배우겠습니다.",
    image_path: "/images/profile.jpg",
  };
  const highlights = [
    { id: 1, label: "귀차니즘" },
    { id: 2, label: "스포츠광" },
    { id: 3, label: "비정상인" },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(rgba(255,255,255,0.78),rgba(255,255,255,0.78)),url('/images/campus-bg.png')] bg-cover bg-center bg-fixed px-6 py-10 text-slate-900">
      {/* 자기소개 전체 화면: 학생들이 이름, 소속, 설명을 바꿔보는 첫 실습 영역 */}
      <section className="relative mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-8 shadow-sm before:absolute before:inset-0 before:bg-[url('/images/pnu-logo-bg.png')] before:bg-center before:bg-no-repeat before:bg-[length:520px_520px] before:opacity-10 before:content-['']">
        <div className="relative z-10">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
          {/* 프로필 사진 영역: public/images/ohtani.jpeg 파일을 화면에 보여줌 */}
          <img
            src={profile.image_path}
            alt={`${profile.name} 프로필 사진`}
            className="h-72 w-full rounded-lg object-cover shadow-sm"
          />

          <div>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">{profile.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700">{profile.tagline}</p>
          </div>
        </div>

        {/* 기본 정보 카드: 바이브 코딩으로 가장 바꾸기 쉬운 데이터 영역 */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">이름</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.name}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">소속</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.team}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">직책</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.position}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">학년</p>
            <p className="mt-2 text-xl font-black text-slate-950">{profile.uniform_number}</p>
          </div>
        </div>

        {/* 소개 문장 영역: 학생들이 문구와 스타일을 바꾸는 연습용 섹션 */}
        <div className="mt-8 rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-black text-slate-950">자기소개</h2>
          <p className="mt-4 leading-8 text-slate-700">{profile.introduction}</p>
        </div>

        {/* 좋아하는 것 목록: 항목 추가/삭제 실습에 쓰기 좋은 영역 */}
        <div className="mt-8">
          <h2 className="text-2xl font-black text-slate-950">특징</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="rounded-lg bg-slate-100 px-4 py-3 text-center font-bold text-slate-700">
                {highlight.label}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
