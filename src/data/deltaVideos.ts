export interface DeltaVideo {
  id: string;
  role: string;
  speaker: string;
  title: string;
  description: string;
  videoUrl: string;
  embedUrl: string;
  publicId: string;
}

export const deltaVideos: DeltaVideo[] = [
  {
    id: "pembina",
    role: "Pembina Delta",
    speaker: "Pembina Delta Team",
    title: "Paparan dari Pembina Delta",
    description:
      "Penjelasan komprehensif mengenai visi strategis, nilai dasar, dan arah perjuangan Delta Team dalam membangun ekosistem vokasi kejuruan yang berdaya saing.",
    videoUrl: "https://res.cloudinary.com/db8imqmb5/video/upload/paparan-pembina-delta.mp4",
    embedUrl: "https://player.cloudinary.com/embed/?cloud_name=db8imqmb5&public_id=paparan-pembina-delta",
    publicId: "paparan-pembina-delta",
  },
  {
    id: "ketua",
    role: "Ketua Delta",
    speaker: "Ketua Delta Team",
    title: "Paparan dari Ketua Delta",
    description:
      "Pemaparan langkah taktis, program kerja unggulan, serta realisasi kolaborasi nyata bersama sekolah-sekolah SMK dan mitra dunia industri.",
    videoUrl: "https://res.cloudinary.com/db8imqmb5/video/upload/paparan-ketua-delta.mp4",
    embedUrl: "https://player.cloudinary.com/embed/?cloud_name=db8imqmb5&public_id=paparan-ketua-delta",
    publicId: "paparan-ketua-delta",
  },
  {
    id: "pendiri",
    role: "Pendiri Delta",
    speaker: "Pendiri Delta Team",
    title: "Paparan dari Pendiri Delta",
    description:
      "Kisah dan filosofi di balik lahirnya Yayasan Delta Cendekia Mulia serta komitmen pengabdian tanpa henti untuk generasi muda Indonesia.",
    videoUrl: "https://res.cloudinary.com/db8imqmb5/video/upload/paparan-pendiri-delta.mp4",
    embedUrl: "https://player.cloudinary.com/embed/?cloud_name=db8imqmb5&public_id=paparan-pendiri-delta",
    publicId: "paparan-pendiri-delta",
  },
];
