export interface DeltaTestimonial {
  id: string;
  name: string;
  title: string;
  school: string;
  quote: string;
  videoUrl: string;
  embedUrl: string;
  publicId: string;
}

export const deltaTestimonials: DeltaTestimonial[] = [
  {
    id: "elan-suherlan",
    name: "Elan Suherlan",
    title: "Kepala Sekolah SMK",
    school: "Mitra Delta Team",
    quote:
      "Kolaborasi bersama Delta Team memberikan dampak nyata bagi peningkatan mutu lulusan serta kesiapan kerja siswa-siswi vokasi kami.",
    videoUrl: "https://res.cloudinary.com/db8imqmb5/video/upload/Testimoni_ELAN_SUHERLAN_1.mp4",
    embedUrl: "https://player.cloudinary.com/embed/?cloud_name=db8imqmb5&public_id=Testimoni_ELAN_SUHERLAN_1",
    publicId: "Testimoni_ELAN_SUHERLAN_1",
  },
  {
    id: "firda-herminia",
    name: "Firda Herminia Putrianti",
    title: "Kepala Sekolah SMK",
    school: "Mitra Delta Team",
    quote:
      "Program pendampingan dan pelatihan dari Delta Team sangat relevan dengan kebutuhan industri masa kini. Sinergi ini patut terus dikembangkan.",
    videoUrl: "https://res.cloudinary.com/db8imqmb5/video/upload/Testimoni_FIRDA_HERMINIA_PUTRIANTI.mp4",
    embedUrl: "https://player.cloudinary.com/embed/?cloud_name=db8imqmb5&public_id=Testimoni_FIRDA_HERMINIA_PUTRIANTI",
    publicId: "Testimoni_FIRDA_HERMINIA_PUTRIANTI",
  },
  {
    id: "asmiati-wahyuningsih",
    name: "Asmiati Wahyuningsih",
    title: "Kepala Sekolah SMK",
    school: "Mitra Delta Team",
    quote:
      "Kami sangat mengapresiasi komitmen Delta Team dalam menjembatani sekolah vokasi dengan dunia industri secara profesional.",
    videoUrl: "https://res.cloudinary.com/db8imqmb5/video/upload/Testimoni_ASMIATI_WAYUNINGSIH.mp4",
    embedUrl: "https://player.cloudinary.com/embed/?cloud_name=db8imqmb5&public_id=Testimoni_ASMIATI_WAYUNINGSIH",
    publicId: "Testimoni_ASMIATI_WAYUNINGSIH",
  },
];
