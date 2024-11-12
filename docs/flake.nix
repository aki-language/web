{
  description = "Docusaurus development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            yarn
            nodePackages.npm
            
            # Optional but useful tools
            git
            watchman
          ];

          shellHook = ''
            echo "Docusaurus development environment"
            echo "Node.js version: $(node --version)"
            echo "Yarn version: $(yarn --version)"
            echo "NPM version: $(npm --version)"
            
            # Create a new Docusaurus project (uncomment if needed)
            # npx create-docusaurus@latest my-website classic
          '';
        };
      });
}