// @ts-nocheck
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  Sparkles,
  useCursor,
} from "@react-three/drei";
import { Group, Vector3 } from "three";

const sectionTargets = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const clampId = (id: string) => {
  const target = document.getElementById(id);
  return target ?? document.getElementById("contact");
};

const ScreenOverlay = ({
  booting,
  screenOn,
  onClick,
  onHoverChange,
  onNavigate,
}: {
  booting: boolean;
  screenOn: boolean;
  onClick: () => void;
  onHoverChange?: (value: boolean) => void;
  onNavigate: (id: string) => void;
}) => {
  return (
    <div
      className="pointer-events-auto flex h-full w-full flex-col items-center justify-center rounded-[22px] border border-white/10 bg-black/60 p-4 text-white shadow-[0_0_40px_rgba(10,165,255,0.18)]"
      style={{ backdropFilter: "blur(8px)" }}
      onClick={onClick}
      onPointerEnter={() => onHoverChange?.(true)}
      onPointerLeave={() => onHoverChange?.(false)}
    >
      <div className="pointer-events-auto flex h-full w-full flex-col justify-between rounded-[20px] p-4">
        {booting ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-sm text-white/80">
            <div className="flex h-4 w-full items-end gap-2">
              <span className="block h-full w-1/3 rounded-full bg-cyan-400/90 animate-pulse" />
              <span className="block h-3 w-1/4 rounded-full bg-cyan-400/80 animate-pulse" />
              <span className="block h-2 w-1/6 rounded-full bg-cyan-400/60 animate-pulse" />
            </div>
            <p className="text-lg font-semibold tracking-[0.22em] text-cyan-200/90">
              BOOTING...
            </p>
            <p className="max-w-xs text-sm text-white/70">
              Launching the interactive portfolio portal. Hold on for the next
              visual phase.
            </p>
          </div>
        ) : screenOn ? (
          <div className="flex h-full flex-col justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                Portfolio Portal
              </p>
              <p className="mt-2 text-sm text-white/80">
                Click any section to glide there instantly.
              </p>
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-2">
              {sectionTargets.map((target) => (
                <button
                  key={target.id}
                  type="button"
                  onClick={() => onNavigate(target.id)}
                  className="pointer-events-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-100"
                >
                  <span className="block text-xs uppercase tracking-[0.28em] text-white/50">
                    {target.label}
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-white">
                    Go to {target.label}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Tap the screen again to power down.
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-sm text-white/70">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">
              <span className="text-2xl">⏻</span>
            </div>
            <p className="text-base font-semibold text-white">
              Click to power on
            </p>
            <p className="max-w-xs text-sm text-white/60">
              Experience the portfolio portal inside the monitor.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const LaptopDisplay = ({
  booting,
  screenOn,
  onScreenClick,
  onNavigate,
  setHovered,
}: {
  booting: boolean;
  screenOn: boolean;
  onScreenClick: () => void;
  onNavigate: (id: string) => void;
  setHovered: (value: boolean) => void;
}) => {
  const bezelRef = useRef<Group>(null);
  useCursor(screenOn || booting, "pointer");

  return (
    <group ref={bezelRef}>
      <mesh castShadow receiveShadow position={[0, 1.16, -0.42]}>
        <boxGeometry args={[5.1, 3.35, 0.18]} />
        <meshStandardMaterial
          color="#0a0d14"
          metalness={0.8}
          roughness={0.12}
          envMapIntensity={1.2}
        />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 1.2, -0.18]}>
        <boxGeometry args={[4.6, 2.95, 0.08]} />
        <meshStandardMaterial
          color="#06090f"
          metalness={0.2}
          roughness={0.05}
          emissive={
            screenOn ? new Vector3(0.03, 0.1, 0.2) : new Vector3(0, 0, 0)
          }
          emissiveIntensity={screenOn ? 0.8 : 0.2}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        position={[0, 1.22, -0.1]}
        onClick={onScreenClick}
      >
        <planeGeometry args={[4.38, 2.85]} />
        <meshStandardMaterial
          color={screenOn ? "#09121c" : "#02050b"}
          emissive={
            screenOn ? new Vector3(0.02, 0.09, 0.16) : new Vector3(0, 0, 0)
          }
          emissiveIntensity={screenOn ? 1.4 : 0.35}
          roughness={0.03}
          metalness={0.1}
          transparent
          opacity={0.98}
        />

        <Html
          transform
          occlude
          position={[0, 0, 0.051]}
          rotation={[0, 0, 0]}
          scale={0.2}
        >
          <div className="flex h-[285px] w-[438px] items-center justify-center rounded-[28px] bg-black/40 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-black/70 shadow-[0_0_40px_rgba(10,165,255,0.16)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.13),transparent_35%)] opacity-90" />
              <div className="relative flex h-full w-full flex-col justify-center gap-4 p-4 text-white">
                <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-cyan-100/70">
                  <span className="h-2 w-2 rounded-full bg-cyan-400/90" />
                  portal.live
                </div>
                <div className="pointer-events-none flex h-full w-full items-center justify-center">
                  <ScreenOverlay
                    booting={booting}
                    screenOn={screenOn}
                    onClick={onScreenClick}
                    onHoverChange={setHovered}
                    onNavigate={onNavigate}
                  />
                </div>
              </div>
            </div>
          </div>
        </Html>
      </mesh>

      <mesh castShadow position={[0, 0.16, 0.36]} rotation={[0.03, 0, 0]}>
        <boxGeometry args={[5.25, 0.22, 1.85]} />
        <meshStandardMaterial
          color="#0f131a"
          roughness={0.18}
          metalness={0.35}
        />
      </mesh>

      <mesh castShadow position={[0, 0.38, 0.36]} rotation={[0.03, 0, 0]}>
        <boxGeometry args={[4.1, 0.08, 1.32]} />
        <meshStandardMaterial
          color="#11161f"
          roughness={0.22}
          metalness={0.15}
        />
      </mesh>

      <mesh position={[0, 0.44, 0.18]} rotation={[0.12, 0, 0]}>
        <boxGeometry args={[3.9, 0.02, 0.9]} />
        <meshStandardMaterial
          color="#1e2531"
          roughness={0.22}
          metalness={0.12}
        />
      </mesh>

      <mesh position={[0, 0.28, 0.92]} rotation={[-0.03, 0, 0]}>
        <boxGeometry args={[4.0, 0.08, 0.15]} />
        <meshStandardMaterial
          color="#080b10"
          roughness={0.15}
          metalness={0.32}
        />
      </mesh>
    </group>
  );
};

const LaptopScene = () => {
  const [hovered, setHovered] = useState(false);
  const [screenOn, setScreenOn] = useState(false);
  const [booting, setBooting] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const group = useRef<Group>(null);

  useEffect(() => {
    if (!booting) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setBooting(false);
      setScreenOn(true);
    }, 1700);

    return () => window.clearTimeout(timeout);
  }, [booting]);

  useFrame((state) => {
    const x = state.mouse.x * 0.12;
    const y = state.mouse.y * 0.08;
    if (group.current) {
      group.current.rotation.x += (y - group.current.rotation.x) * 0.05;
      group.current.rotation.y += (x - group.current.rotation.y) * 0.05;
      group.current.position.y +=
        ((hovered ? 0.18 : 0.08) - group.current.position.y) * 0.05;
    }

    const zoomTarget = zoomed
      ? new Vector3(0, 1.15, 3.2)
      : new Vector3(0, 2.4, 7.2);
    state.camera.position.lerp(zoomTarget, 0.04);
    state.camera.lookAt(0, 1.05, 0);
  });

  const handleScreenClick = () => {
    if (booting) return;
    if (!screenOn) {
      setZoomed(true);
      setBooting(true);
      setScreenOn(false);
      return;
    }

    setScreenOn(false);
    setZoomed(false);
  };

  const handleNavigate = (id: string) => {
    const target = clampId(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2.4, 7.2], fov: 30 }}
      style={{ height: "100%", width: "100%" }}
    >
      <ambientLight intensity={0.35} />
      <spotLight
        position={[5, 8, 8]}
        angle={0.25}
        penumbra={0.4}
        intensity={2.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-5, 6, 6]} intensity={1.2} color="#4b9aff" />
      <Environment preset="city" />
      <Sparkles
        color="#38bdf8"
        count={24}
        scale={[10, 3, 10]}
        size={1.2}
        speed={0.22}
      />

      <group ref={group}>
        <LaptopDisplay
          booting={booting}
          screenOn={screenOn}
          onScreenClick={handleScreenClick}
          onNavigate={handleNavigate}
          setHovered={setHovered}
        />
      </group>

      <ContactShadows
        position={[0, 0.12, 0]}
        opacity={0.5}
        scale={8}
        blur={2.2}
        far={2.8}
      />
    </Canvas>
  );
};

const InteractiveComputer = () => {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-[24px] bg-[#080b10]">
      <Suspense fallback={null}>
        <LaptopScene />
      </Suspense>
    </div>
  );
};

export default InteractiveComputer;
