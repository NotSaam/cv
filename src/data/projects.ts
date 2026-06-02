export type Project = {
  slug: string;
  name: string;
  accent: 'cyan' | 'violet';
  tagline: string;
  summary: string;
  description: string;
  objective: string;
  architecture: string;
  state?: string;
  vision?: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: 'flakai',
    name: 'FLAKAI',
    accent: 'violet',
    tagline: 'IA · Visión por computador · Deportes · Full-stack',
    summary:
      'Plataforma full-stack que analiza partidos de fútbol con IA: sube el vídeo y recibe los clips de cada evento, clasificados automáticamente.',
    description:
      'Plataforma de extremo a extremo que procesa partidos de fútbol grabados en vídeo y detecta automáticamente los eventos clave —goles, córners, saques de banda, faltas, saques de puerta y disparos—, recortando un clip por evento con FFmpeg y clasificándolos por tipo, sin revisión manual. Incluye dashboard de subida con progreso en vivo, API REST, autenticación, multi-equipo, facturación con Stripe y un bucle de entrenamiento human-in-the-loop.',
    objective:
      'Convertir horas de edición de vídeo post-partido en un paso desatendido de subir y recoger, con un producto usable en entorno real y un motor de IA que mejora con el uso.',
    architecture:
      'Backend FastAPI con worker asíncrono y semáforo de concurrencia; detector de eventos pluggable (PyTorch / ONNX) sobre MobileNetV3-Small con ventana deslizante + NMS; extracción de clips con FFmpeg en stream-copy y en paralelo; registro de modelos versionado y reentrenamiento incremental alimentado por la cola de revisión humana; frontend Next.js 14 + Tailwind. Entrenamiento en GPU vía DirectML.',
    state: 'Plataforma full-stack funcional de extremo a extremo, con pipeline ML versionado y bucle de datos human-in-the-loop.',
    tech: ['Python', 'FastAPI', 'Next.js 14', 'PyTorch', 'ONNX', 'FFmpeg', 'Stripe', 'SQLite / PostgreSQL'],
    link: 'https://github.com/NotSaam/FlakAI-v2',
  },
  {
    slug: 'flk0s',
    name: 'FLK0S',
    accent: 'cyan',
    tagline: 'Ciberseguridad enterprise · Ecosistema',
    summary:
      'Suite enterprise de ciberseguridad: Blue Team, Red Team, orquestación con IA y reporting bajo un SSO único.',
    description:
      'Suite enterprise de ciberseguridad: Blue Team, Red Team, orquestación con IA y reporting, bajo una identidad y un SSO únicos. Cuatro aplicaciones modulares sobre una plataforma compartida de identidad, diseño y observabilidad.',
    objective:
      'Que se sienta como un producto y no como cuatro: una sola sesión, una sola estética, un solo ecosistema cohesionado.',
    architecture:
      'Módulos CDP (defensa), RT (red team), AI (agentes ofensivos autónomos) y Reportes, unidos por un Auth Gateway con SSO HS256 y MFA, un Centro de Operaciones como hub, y observabilidad con OpenTelemetry tras Caddy y Docker.',
    vision:
      'Un ecosistema de seguridad modular y escalable donde la IA orquesta y conecta operaciones ofensivas y defensivas dentro de un mismo marco.',
    tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'SSO HS256', 'OpenTelemetry', 'Caddy', 'Docker'],
    link: 'https://github.com/NotSaam',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
