import Image from "next/image";
import type { IconType } from "react-icons";

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SIMPLE_ICON_BASE = "https://cdn.simpleicons.org";

function createSvgIcon(src: string, label: string): IconType {
  const SvgIcon: IconType = ({ size = 16, title, className, style }) => {
    const dimension = typeof size === "number" ? size : 16;

    return (
      <Image
        src={src}
        alt={title ?? label}
        aria-hidden={!title}
        width={dimension}
        height={dimension}
        unoptimized
        draggable={false}
        className={className}
        style={{
          display: "inline-block",
          width: size,
          height: size,
          objectFit: "contain",
          flexShrink: 0,
          ...style,
        }}
      />
    );
  };

  return SvgIcon;
}

function devicon(file: string, label: string): IconType {
  return createSvgIcon(`${DEVICON_BASE}/${file}/${file}-original.svg`, label);
}

function simpleIcon(slug: string, label: string, color?: string): IconType {
  const src = color
    ? `${SIMPLE_ICON_BASE}/${slug}/${color}`
    : `${SIMPLE_ICON_BASE}/${slug}`;

  return createSvgIcon(src, label);
}

// Generic SVG glyphs for concepts without a dedicated brand logo.
// These are not official brand marks.
type GenericIconKind = "sql" | "zustand" | "i18n" | "cicd";

function genericIcon(kind: GenericIconKind, label: string): IconType {
  const Component: IconType = ({
    size = 16,
    color = "currentColor",
    title,
    className,
    style,
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flexShrink: 0, ...style }}
      role="img"
      aria-label={title ?? label}
    >
      <title>{title ?? label}</title>

      {kind === "sql" && (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
          <text
            x="12"
            y="11"
            textAnchor="middle"
            fontSize="5"
            fontWeight="bold"
            fill={color}
            stroke="none"
          >
            SQL
          </text>
        </>
      )}

      {kind === "zustand" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="4" />
          <circle cx="8" cy="9" r="1.4" />
          <circle cx="16" cy="9" r="1.4" />
          <circle cx="12" cy="15" r="1.4" />
          <path d="M9.2 10l2 3.6M14.8 10l-2 3.6" />
        </>
      )}

      {kind === "i18n" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </>
      )}

      {kind === "cicd" && (
        <>
          <rect x="2.5" y="3.5" width="6" height="6" rx="1.5" />
          <rect x="15.5" y="14.5" width="6" height="6" rx="1.5" />
          <rect x="2.5" y="14.5" width="6" height="6" rx="1.5" />
          <path d="M8.5 6.5h4a3 3 0 0 1 3 3v5M8.5 17.5h4" />
          <path d="m13.5 12.5 2 2 2-2" />
        </>
      )}
    </svg>
  );

  return Component;
}

// Custom SVGs for skill logos.
export const skillIcons: Record<string, IconType> = {
  // Languages
  JavaScript: devicon("javascript", "JavaScript"),
  TypeScript: devicon("typescript", "TypeScript"),
  HTML5: devicon("html5", "HTML5"),
  CSS3: devicon("css3", "CSS3"),
  Python: devicon("python", "Python"),
  C: devicon("c", "C"),
  "C++": devicon("cplusplus", "C++"),
  "C#": devicon("csharp", "C#"),
  Java: devicon("java", "Java"),
  PHP: devicon("php", "PHP"),
  Kotlin: devicon("kotlin", "Kotlin"),
  SQL: genericIcon("sql", "SQL"),

  // Frameworks & Libraries
  React: devicon("react", "React"),
  "Next.js": devicon("nextjs", "Next.js"),
  "Vue.js": devicon("vuejs", "Vue.js"),
  Laravel: devicon("laravel", "Laravel"),
  Streamlit: devicon("streamlit", "Streamlit"),
  OpenCV: devicon("opencv", "OpenCV"),
  "Material UI": devicon("materialui", "Material UI"),
  "Ant Design": devicon("antdesign", "Ant Design"),
  "shadcn/ui": simpleIcon("shadcnui", "shadcn/ui"),
  Bootstrap: devicon("bootstrap", "Bootstrap"),
  "Tailwind CSS": devicon("tailwindcss", "Tailwind CSS"),

  // Motion logo, bukan wordmark Framer
  "Motion React": createSvgIcon(
    "https://cdn.brandfetch.io/idDJv1mfrb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    "Framer Motion",
  ),
  "Redux Toolkit": devicon("redux", "Redux"),
  "TanStack Query": simpleIcon("reactquery", "TanStack Query", "FF4154"),
  Zustand: genericIcon("zustand", "Zustand"),
  "next-intl/i18n": genericIcon("i18n", "Internationalization"),
  NestJS: devicon("nestjs", "NestJS"),
  Prisma: devicon("prisma", "Prisma"),
  FastAPI: devicon("fastapi", "FastAPI"),
  Vitest: devicon("vitest", "Vitest"),

  JUnit: createSvgIcon(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
    "JUnit",
  ),

  "Chart.js": devicon("chartjs", "Chart.js"),

  // Databases
  MySQL: devicon("mysql", "MySQL"),
  PostgreSQL: devicon("postgresql", "PostgreSQL"),
  Supabase: devicon("supabase", "Supabase"),

  // Tools & Platforms
  Git: devicon("git", "Git"),
  GitHub: devicon("github", "GitHub"),
  GitLab: devicon("gitlab", "GitLab"),

  Mockoon: createSvgIcon(
    "https://mockoon.com/images/logo-eyes.svg?download=true",
    "Mockoon",
  ),

  Postman: devicon("postman", "Postman"),
  "Visual Studio Code": devicon("vscode", "Visual Studio Code"),
  Vercel: devicon("vercel", "Vercel"),

  // Mapbox: logo mark tanpa wordmark
  Mapbox: simpleIcon("mapbox", "Mapbox", "4264FB"),

  "Apache ECharts": simpleIcon("apacheecharts", "Apache ECharts"),
  Swagger: devicon("swagger", "Swagger"),
  Vite: devicon("vite", "Vite"),
  Docker: devicon("docker", "Docker"),
  Figma: devicon("figma", "Figma"),
  DBeaver: simpleIcon("dbeaver", "DBeaver"),
  Render: simpleIcon("render", "Render"),

  // AWS: Simple Icons, dengan warna oranye
  AWS: createSvgIcon(
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    "AWS",
  ),
  Azure: devicon("azure", "Azure"),
  "Android Studio": devicon("androidstudio", "Android Studio"),
  "Linux (Ubuntu)": devicon("ubuntu", "Ubuntu"),
  "Microsoft Word": devicon("microsoftword", "Microsoft Word"),
  "Microsoft Excel": devicon("microsoftexcel", "Microsoft Excel"),
  Canva: devicon("canva", "Canva"),
  "Node.js": devicon("nodejs", "Node.js"),
  "CI/CD": genericIcon("cicd", "CI/CD"),
};
