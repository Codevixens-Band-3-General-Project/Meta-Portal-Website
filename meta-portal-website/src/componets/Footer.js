import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:order-2">
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="creative_link hover:text-white"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="creative_link hover:text-white"
                  to="/cookies"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  className="creative_link hover:text-white"
                  to="/terms-conditions"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:order-1">
            <p>
              Copyright 2022 — Designed &amp; Developed by
              <Link
                to="https://themeforest.net/user/frenify/portfolio"
                className="text-white ml-2">
                Frenify
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer
