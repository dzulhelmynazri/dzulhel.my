import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Dzulhelmy",
  lastName: "Nazri",
  displayName: "Dzulhelmy Nazri",
  username: "dzulhelmynazri",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "The only way to do great work is to love what you do.",
    "But I hate to do what I try to love.",
    "Product Interface Engineer",
  ],
  address: "Cyberjaya, Malaysia",
  phoneNumber: "MDE3NTExNjExNQ==", // E.01 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "ZHp1bGhlbG15bmF6cmlAZ21haWwuY29t", // base64 encoded
  website: "https://dzulhel.my",
  jobTitle: "Product Interface Engineer",
  jobs: [
    {
      title: "Product Interface Engineer",
      company: "Mechanikos Sdn Bhd",
      website: "https://mechanikos.com",
    },
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  about: `
Hello, World! I am Dzulhelmy Bin Nazri — a Frontend Engineer passionate about creating clean UIs and writing clean code. I love to learn new technologies to ease my Developer Experience (DX).

I'm currently working at [Mechanikos Sdn Bhd](https://mechanikos.com) as a Product Interface Engineer. I'm responsible for creating the user interface for the Mechanikos's projects.

Let's connect and collaborate!
  `,
  avatar: "/dzulhelmy.webp",
  ogImage: "/og-image.png",
  namePronunciationUrl: "/audio/dzulhelmy.mp3",
  keywords: ["dzulhelmy", "dzulhelmy nazri"],
  dateCreated: "2025-10-31", // YYYY-MM-DD
};
