import Link from "next/link";

export default function FooterSection() {
  return (
    <p>
      Already have an account?{" "}
      <Link className="font-bold" href="/boards">
        Log in
      </Link>
    </p>
  );
}
