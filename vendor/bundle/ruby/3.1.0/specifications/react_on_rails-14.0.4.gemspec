# -*- encoding: utf-8 -*-
# stub: react_on_rails 14.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "react_on_rails".freeze
  s.version = "14.0.4".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Justin Gordon".freeze]
  s.bindir = "exe".freeze
  s.date = "2024-07-03"
  s.description = "See README.md".freeze
  s.email = ["justin@shakacode.com".freeze]
  s.homepage = "https://github.com/shakacode/react_on_rails".freeze
  s.licenses = ["MIT".freeze]
  s.post_install_message = "\n--------------------------------------------------------------------------------\nCheckout https://www.shakacode.com/react-on-rails-pro for information about\n\"React on Rails Pro\" which includes one hour a month of support and a gem for\nbetter performance, via caching helpers, and our node rendering server.\n--------------------------------------------------------------------------------\n".freeze
  s.required_ruby_version = Gem::Requirement.new(">= 3.0.0".freeze)
  s.rubygems_version = "3.5.3".freeze
  s.summary = "Rails with react server rendering with webpack.".freeze

  s.installed_by_version = "3.6.9".freeze

  s.specification_version = 4

  s.add_runtime_dependency(%q<addressable>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<connection_pool>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<execjs>.freeze, ["~> 2.5".freeze])
  s.add_runtime_dependency(%q<rails>.freeze, [">= 5.2".freeze])
  s.add_runtime_dependency(%q<rainbow>.freeze, ["~> 3.0".freeze])
  s.add_development_dependency(%q<gem-release>.freeze, [">= 0".freeze])
end
